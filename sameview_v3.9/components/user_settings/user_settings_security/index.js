// Copyright (c) 2017 Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getMe} from 'mattermost-redux/actions/users';

import SecurityTab from './user_settings_security.jsx';

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            getMe
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SecurityTab);
