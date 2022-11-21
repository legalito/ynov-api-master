import mongoose from "mongoose";

const { Schema } = mongoose;

const exemplesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    colors: {
        type: [String],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    createAt: {
        type: Date,
        required: true
    },
    updateAt: {
        type: Date,
        required: true
    }
});

const exemplesModel = mongoose.model('Exemples', exemplesSchema);

exemplesSchema.static({
    async createOne(object) {
        await exemplesModel.insertOne(object);
    },
    async updateById (object) {
        await exemplesModel.updateOne({_id: object.id}, {$set: object});
    }
})



export default exemplesModel;