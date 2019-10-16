import { Table, Popconfirm } from 'antd';
import { i18n } from 'i18n';
import actions from 'modules/tool/list/toolListActions';
import destroyActions from 'modules/tool/destroy/toolDestroyActions';
import selectors from 'modules/tool/list/toolListSelectors';
import destroySelectors from 'modules/tool/destroy/toolDestroySelectors';
import model from 'modules/tool/toolModel';
import toolSelectors from 'modules/tool/toolSelectors';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'view/shared/styles/TableWrapper';
import ButtonLink from 'view/shared/styles/ButtonLink';
import UserListItem from 'view/iam/list/users/UserListItem';
import authSelectors from 'modules/auth/authSelectors';

const { fields } = model;

class ToolListTable extends Component {
  handleTableChange = (pagination, filters, sorter) => {
    const { dispatch } = this.props;

    dispatch(
      actions.doChangePaginationAndSort(pagination, sorter),
    );
  };

  doDestroy = (id) => {
    const { dispatch } = this.props;
    dispatch(destroyActions.doDestroy(id));
  };

  columns = [
    !this.props.isToolOwner &&
      fields.owner.forTable({
        render: (value) => <UserListItem value={value} />,
      }),
    fields.name.forTable(),
    fields.type.forTable(),
    fields.breed.forTable(),
    fields.size.forTable(),
    fields.createdAt.forTable(),
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/tool/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {this.props.hasPermissionToEdit && (
            <Link to={`/tool/${record.id}/edit`}>
              {i18n('common.edit')}
            </Link>
          )}
          {this.props.hasPermissionToDestroy && (
            <Popconfirm
              title={i18n('common.areYouSure')}
              onConfirm={() => this.doDestroy(record.id)}
              okText={i18n('common.yes')}
              cancelText={i18n('common.no')}
            >
              <ButtonLink>
                {i18n('common.destroy')}
              </ButtonLink>
            </Popconfirm>
          )}
        </div>
      ),
    },
  ].filter(Boolean);

  rowSelection = () => {
    return {
      selectedRowKeys: this.props.selectedKeys,
      onChange: (selectedRowKeys) => {
        const { dispatch } = this.props;
        dispatch(actions.doChangeSelected(selectedRowKeys));
      },
    };
  };

  render() {
    const { pagination, rows, loading } = this.props;

    return (
      <TableWrapper>
        <Table
          rowKey="id"
          loading={loading}
          columns={this.columns}
          dataSource={rows}
          pagination={pagination}
          onChange={this.handleTableChange}
          rowSelection={this.rowSelection()}
          scroll={{ x: true }}
        />
      </TableWrapper>
    );
  }
}

function select(state) {
  return {
    loading:
      selectors.selectLoading(state) ||
      destroySelectors.selectLoading(state),
    rows: selectors.selectRows(state),
    pagination: selectors.selectPagination(state),
    filter: selectors.selectFilter(state),
    selectedKeys: selectors.selectSelectedKeys(state),
    hasPermissionToEdit: toolSelectors.selectPermissionToEdit(
      state,
    ),
    hasPermissionToDestroy: toolSelectors.selectPermissionToDestroy(
      state,
    ),
    isToolOwner: authSelectors.selectCurrentUserIsToolOwner(
      state,
    ),
  };
}

export default connect(select)(ToolListTable);
