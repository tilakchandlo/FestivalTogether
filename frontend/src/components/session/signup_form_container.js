import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom';

import SessionForm from './session_form';
import { registerUser, clearErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors: { session } }) => ({
  formType: 'Register',
  errors: session
});

const mapDispatchToProps = dispatch => ({
  processForm: userData => dispatch(registerUser(userData)),
  navLink: (
    <div>
      Already have an account?
      <button onClick={() => dispatch(openModal('Log In'))}>Log In</button>
    </div>
  ),
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearErrors())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SessionForm)
);
