/** Chunk was on 72853 **/
/** chunk id: 535188, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk132392 = require("./132392.js"),
  Chunk342781 = require("./342781.js");
let l = e => {
  var t;
  let {
    onSubmit: n,
    disabled: l
  } = e, {
    task: c
  } = (0, i.T)(), o = a.o[c.ui_component.component.type];
  return null == o ? null : (0, r.jsx)(o, {
    configData: c.ui_component.component.data,
    onSubmit: n,
    taskId: c.task_id,
    flowId: null == (t = c.flow_context) ? true : t.flow_id,
    assignmentId: c.assignment_id,
    disabled: l
  })
}