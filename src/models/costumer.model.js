const mongoose = require("mongoose");

const costumerSchema = mongoose.Schema({
    dueDate:{type: String, require: true},
    docNumber:{type: String, require: true},
    status:{type: String, require: true},
    line:{  type: Object, 
            require: true, 
                amount:{
                    type: String,
                    require: true
                },
                detailType:{
                    type: String,
                    require: true
                },
                expenseDetail:{
                    type: Object,
                    require: true,
                        Customer:{
                            type: Object,
                            require: true,
                                value:{
                                    type: String,
                                    require: true
                                },
                                costumerName:{
                                    type: String,
                                    require: true
                                },
                                ref:{
                                    type: Object,
                                    require: true,
                                        refValue:{
                                            type: String,
                                            require: true
                                        },
                                        refName:{
                                            type: String,
                                            require: true
                                        }
                                },
                        },
                        account:{
                            type: Object,
                            require: true,
                                accountValue:{
                                    type: String,
                                    require: true
                                },
                                accountName:{
                                    type: String,
                                    require: true
                                }
                        },
                        lineStatus:{
                            type: String,
                            require: true
                        }
                }
        },
    vendor:{
        type: Object,
        require: true,
            vendorValue:{
                type: String,
                require: true
            },
            vendorName:{
                type: String,
                require: true
            }

    },
    totalAmount:{type: String, require: true}
});

module.exports = mongoose.model('CostumerCollletion', costumerSchema);