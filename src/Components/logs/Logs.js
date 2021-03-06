import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLogs } from "../../action/logActions";

import LogItem from "./LogItem";
import Preloader from "../Layout/Preloader";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No Logs to show...</p>
      ) : (
        logs.map(log => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  logs: PropTypes.object
};

const mapStateToProps = state => ({
  log: state.log,
  getLogs: PropTypes.func.isRequired
});

export default connect(mapStateToProps, { getLogs })(Logs);
