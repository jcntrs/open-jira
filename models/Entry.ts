import mongoose, { Model, Schema } from 'mongoose';
import { Entry } from '../interfaces';

export interface IEntry extends Entry { }

const entrySchema = new Schema({
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Number
    },
    status: {
        type: String,
        enum: {
            values: ['pending', 'inProgress', 'finished'],
            message: '{VALUE} not a permitted state'
        },
        default: 'pending'
    }
});

// if the model is already created. use the created
const EntryModel: Model<IEntry> = mongoose.models.Entry || mongoose.model('Entry', entrySchema)

export default EntryModel;