import {getDefaultEvents} from "./api";
import {renderEvents} from "./render";

async function app() {
    const events = await getDefaultEvents();
    renderEvents(events)
}
app();