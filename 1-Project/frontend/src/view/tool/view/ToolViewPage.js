import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import ToolView from 'view/tool/view/ToolView';
import { i18n } from 'i18n';
import actions from 'modules/tool/view/toolViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/tool/view/toolViewSelectors';
import ToolViewToolbar from 'view/tool/view/ToolViewToolbar';

class ToolPage extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(actions.doFind(match.params.id));
  }

  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.tool.menu'), '/tool'],
            [i18n('entities.tool.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.tool.view.title')}
          </PageTitle>

          <ToolViewToolbar match={this.props.match} />

          <ToolView
            loading={this.props.loading}
            record={this.props.record}
          />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

function select(state) {
  return {
    loading: selectors.selectLoading(state),
    record: selectors.selectRecord(state),
  };
}

export default connect(select)(Layout(ToolPage));
