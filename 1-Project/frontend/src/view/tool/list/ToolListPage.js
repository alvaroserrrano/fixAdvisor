import React, { Component } from 'react';
import ToolListFilter from 'view/tool/list/ToolListFilter';
import ToolListTable from 'view/tool/list/ToolListTable';
import ToolListToolbar from 'view/tool/list/ToolListToolbar';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class ToolListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.tool.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.tool.list.title')}
          </PageTitle>

          <ToolListToolbar />
          <ToolListFilter />
          <ToolListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Layout(ToolListPage);
