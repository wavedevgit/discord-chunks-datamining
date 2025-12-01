/** Chunk was on 837 **/
/** chunk id: 535188, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk132392 = require("./132392.js"),
  Chunk342781 = require("./342781.js");
let i = e => {
  var t;
  let {
    onSubmit: n,
    disabled: i
  } = e, {
    task: s
  } = (0, r.T)(), o = l.o[s.ui_component.component.type];
  return null == o ? null : (0, a.jsx)(o, {
    configData: s.ui_component.component.data,
    onSubmit: n,
    taskId: s.task_id,
    flowId: null == (t = s.flow_context) ? true : t.flow_id,
    assignmentId: s.assignment_id,
    disabled: i
  })
}