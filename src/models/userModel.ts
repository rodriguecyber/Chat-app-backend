import { DataTypes,Model, Optional } from "sequelize";
import sequelize from '../config/db'
 interface userAttributes {
id:Number,
userName:String,
email:String,
age:Number,
gender:String,
location:String,
fullname:String,
phone:Number,
isBlocked:Boolean,
isVerified:Boolean,
password:String,
 }
  interface UsercreationAttributes extends  Optional<userAttributes,'id'|'gender'|'age'|'location'>{
    gender:string
  }
  class User extends Model<userAttributes, UsercreationAttributes> implements userAttributes{
    public id!:Number;
    public userName!: String;
    public password!: String;
    public email!: String;
    public gender!:String;
    public age!:Number;
    public location!: String;
    public fullname!: String;
    public phone!:Number;
    public isBlocked!: Boolean;
    public isVerified!: Boolean;
    public readonly joinedAt!: Date;
  }
  User.init({
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
      },
      userName: {
          type: DataTypes.STRING(20),
          allowNull: false,
      },
      password: {
          type: DataTypes.STRING(20),
          allowNull: false
      },
      email: {
          type: DataTypes.STRING(50),
          allowNull: false,
      },
      phone: {
          type: DataTypes.NUMBER,
          allowNull: true,
      },
      gender: {
          type: DataTypes.STRING(6),
          allowNull: true
      },
      age: {
          type: DataTypes.NUMBER,
          allowNull: true,
      },
      location: {
          type: DataTypes.STRING(500),
          allowNull: true,
      },
      isBlocked: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
      },
      isVerified: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
      },
      fullname: {
          type: DataTypes.STRING(50),
          allowNull: false
      },
   },
  {
    tableName:'users',
    sequelize,
  }
)
export default User