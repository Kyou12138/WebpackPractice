import { getCities } from "../utils/areaService";
import qs from "query-string";
import $ from "jquery";

const { id, name } = qs.parse(location.search);
const { data } = await getCities(id);
$("h1.title").text(name);
for (const c of data.filter((m) => m.value === id)[0].children) {
    const dd = $("<dd>").text(c.label).appendTo($("dl"));
}
