/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { setGlobalOptions } from "firebase-functions";
import { onRequest } from "firebase-functions/https";
// import * as logger from "firebase-functions/logger";

setGlobalOptions({ maxInstances: 10 });

export const health = onRequest((req, res) => {
  res.status(200).json({ ok: true, service: "agentic-serviceops" });
});
