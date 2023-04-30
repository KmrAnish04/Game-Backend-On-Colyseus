import { schema } from "../modles/dbSchema/schema";
import { connect } from "../modles/model";
import { MyRoomState, Vec2} from "../rooms/schema/MyRoomState";
// import { type, Schema, MapSchema, ArraySchema } from '@colyseus/schema';
const dbScheme = require('../modles/dbSchema/schema')
const model = require('../modles/model')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// export function 
export let connectToDB = connect;


export function saveToDB(playerState: any, roomData: any, sessionId: string){
    console.log(playerState.x);
    console.log(roomData.roomID);
    let data = dbScheme({
        roomInfo: {
            roomName: roomData.roomName,
            roomId: roomData.roomID
        },
        playerState: {
            sessionId: sessionId,
            x: playerState.x,
            y: playerState.y,
        }
    });

    // saveData(data);
    model.saveData(data);

}