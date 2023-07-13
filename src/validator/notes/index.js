const InvarianError = require('../../exeptions/InvariantError');
const NotePayloadSchema = require('./schema');

const NotesValidator = {
  validateNotePayload: (payload) => {
    const validateResult = NotePayloadSchema.validate(payload);
    if (validateResult.error) {
      throw new InvarianError(validateResult.error.message);
    }
  },
};

module.exports = NotesValidator;
