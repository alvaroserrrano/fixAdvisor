import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import StringField from 'modules/shared/fields/stringField';
import EnumeratorField from 'modules/shared/fields/enumeratorField';
import RelationToOneField from 'modules/shared/fields/relationToOneField';
import RelationToManyField from 'modules/shared/fields/relationToManyField';

function label(name) {
  return i18n(`entities.tool.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.tool.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  owner: new RelationToOneField('owner', label('owner'), {
    required: true,
  }),
  name: new StringField('name', label('name'), {
    required: true,
    max: 255,
  }),
  type: new EnumeratorField(
    'type',
    label('type'),
    [
      {
        id: 'mechanical',
        label: enumeratorLabel('type', 'mechanical'),
      },
      {
        id: 'electrician',
        label: enumeratorLabel('type', 'electrician'),
      },
      {
        id: 'plumber',
        label: enumeratorLabel('type', 'plumber'),
      },
      {
        id: 'IT',
        label: enumeratorLabel('type', 'IT'),
      },
      {
        id: 'gardener',
        label: enumeratorLabel('type', 'gardener'),
      },
      {
        id: 'cable',
        label: enumeratorLabel('type', 'cable'),
      },
      {
        id: 'painter',
        label: enumeratorLabel('type', 'painter'),
      },
      {
        id: 'other',
        label: enumeratorLabel('type', 'other'),
      },
    ],
    {
      required: true,
    },
  ),
  size: new EnumeratorField(
    'size',
    label('size'),
    [
      {
        id: 'small',
        label: enumeratorLabel('size', 'small'),
      },
      {
        id: 'medium',
        label: enumeratorLabel('size', 'medium'),
      },
      {
        id: 'large',
        label: enumeratorLabel('size', 'large'),
      },
    ],
    {
      required: true,
    },
  ),
  bookings: new RelationToManyField(
    'bookings',
    label('bookings'),
    {},
  ),
  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
  createdAtRange: new DateTimeRangeField(
    'createdAtRange',
    label('createdAtRange'),
  ),
};

export default {
  fields,
};
