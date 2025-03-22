import { getProvinces } from "@/utils/areaService";
import $ from "jquery";
const { data } = await getProvinces();
const ul = $(".provinces");
for (const p of data) {
    const li = $("<li>").appendTo(ul);
    const a = $("<a>").text(p.label).appendTo(li);
    a.prop("href", `detail.html?name=${p.label}&id=${p.value}`);
}
