/** Chunk was on 90228 **/
/** chunk id: 870341, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => i
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk278466 = require("./278466.js"),
  Chunk62153 = require("./62153.js");
let i = e => {
  var t;
  let {
    onSubmit: n,
    disabled: i
  } = e, {
    task: s
  } = (0, l.Z)(), o = r.a[s.ui_component.component.type];
  return null == o ? null : (0, a.jsx)(o, {
    configData: s.ui_component.component.data,
    onSubmit: n,
    taskId: s.task_id,
    flowId: null == (t = s.flow_context) ? true : t.flow_id,
    assignmentId: s.assignment_id,
    disabled: i
  })
}