import React, { Component } from 'react';
import Layout from 'view/layout/Layout';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import ToolForm from 'view/tool/form/ToolForm';
import { i18n } from 'i18n';

class ToolFormPage extends Component {
  isEditing = () => {
    const { match } = this.props;
    return !!match.params.id;
  };

  title = () => {
    return this.isEditing()
      ? i18n('entities.tool.edit.title')
      : i18n('entities.tool.new.title');
  };

  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.tool.menu'), '/tool'],
            [this.title()],
          ]}
        />

        <ContentWrapper>
          <PageTitle>{this.title()}</PageTitle>

          <ToolForm match={this.props.match} />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default Layout(ToolFormPage);
