const mongoose = require('mongoose');
const Schema = mongoose.Schema;

courses_schema = new Schema({
    id: Number,
    availableForSale: Boolean,
    availableForSaleError: String,
    createdAt: Date,
    deliveredDuration: Number,
    duration: Number,
    endsAt: Date,
    enrollUrl: String,
    enrollmentCap: Number,
    enrollmentsCount: Number,
    firstSessionAt: Number,
    gradeLevel: Number,
    lastSessionAt: Number,
    legacyId: Number,
    name: String,
    nextStartsAt: Date,
    notes: String,
    parentUpdateLastSentAt: Date,
    possibleEvents: Array,
    provisionedDuration: Number,
    remainingProvisionedDuration: Number,
    reservationEndsAt: Date,
    restrictByLeadSource: Boolean,
    schedule: Array,
    startingEpisodeNumber: Number,
    startsAt: Date,
    title: String,
    type: String,
    unscheduledDuration: Number,
    updatedAt: Date,
    status: String,
    requiresParentUpdate: Boolean,
    staffed: Boolean
});

const ModelClass = mongoose.model('courses', courses_schema)

module.exports = ModelClass;