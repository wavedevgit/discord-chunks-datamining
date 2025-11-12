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
    task: s
  } = (0, i.T)(), o = r.o[s.ui_component.component.type];
  return null == o ? null : (0, a.jsx)(o, {
    configData: s.ui_component.component.data,
    onSubmit: n,
    taskId: s.task_id,
    flowId: null == (t = s.flow_context) ? true : t.flow_id,
    assignmentId: s.assignment_id,
    disabled: l
  })
}