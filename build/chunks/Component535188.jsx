/** Chunk was on 99904 **/
/** chunk id: 535188, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk132392 = require("./132392.js"),
  Chunk342781 = require("./342781.js");
let l = e => {
  var t;
  let {
    onSubmit: n,
    disabled: l
  } = e, {
    task: o
  } = (0, r.T)(), s = i.o[o.ui_component.component.type];
  return null == s ? null : (0, a.jsx)(s, {
    configData: o.ui_component.component.data,
    onSubmit: n,
    taskId: o.task_id,
    flowId: null == (t = o.flow_context) ? true : t.flow_id,
    assignmentId: o.assignment_id,
    disabled: l
  })
}