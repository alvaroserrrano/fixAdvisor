const i18n = require('../i18n');

module.exports = class BookingUpdateEmail {
  constructor(booking) {
    this.to = booking.owner.email;
    this.booking = booking;
  }

  get subject() {
    return i18n(
      this.language,
      'emails.bookingUpdate.subject',
      i18n(this.language, 'app.title'),
      this.toolName,
    );
  }

  get html() {}

  get toolName() {
    return this.booking.tool.name;
  }
};
