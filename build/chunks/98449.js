/** Chunk was on 40450 **/
/** chunk id: 98449, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => a
}), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk981631 = require("./981631.js");
let a = e => {
  let {
    id: t,
    name: n,
    locale: a
  } = e, i = "https://".concat(r.xr4, "/hc/").concat(a.toLowerCase(), "/requests/new"), l = new URLSearchParams;
  return l.append("tf_12275088515223", "field_value_dc_category_report_an_app_bot"), l.append("tf_12276208289431", "field_value_dc_reported_action_app_directory"), l.append("tf_12094971213335", t), l.append("ticket_form_id", "12275528604823"), l.append("tf_subject", "App Directory Report ".concat(n, " ").concat(t)), "".concat(i, "?").concat(l.toString())
}