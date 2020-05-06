/**
 * Wild Workouts trainings
 * TODO
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Training from './Training';

/**
 * The Trainings model module.
 * @module model/Trainings
 * @version 1.0.0
 */
class Trainings {
    /**
     * Constructs a new <code>Trainings</code>.
     * @alias module:model/Trainings
     * @param trainings {Array.<module:model/Training>} 
     */
    constructor(trainings) { 
        
        Trainings.initialize(this, trainings);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, trainings) { 
        obj['trainings'] = trainings;
    }

    /**
     * Constructs a <code>Trainings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Trainings} obj Optional instance to populate.
     * @return {module:model/Trainings} The populated <code>Trainings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Trainings();

            if (data.hasOwnProperty('trainings')) {
                obj['trainings'] = ApiClient.convertToType(data['trainings'], [Training]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Training>} trainings
 */
Trainings.prototype['trainings'] = undefined;






export default Trainings;

