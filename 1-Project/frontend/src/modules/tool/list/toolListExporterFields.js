import model from 'modules/tool/toolModel';

const { fields } = model;

export default [
  fields.id,
  fields.owner,
  fields.name,
  fields.type,
  fields.size,
  fields.createdAt,
  fields.updatedAt,
];
