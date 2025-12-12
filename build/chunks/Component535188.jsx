/** Chunk was on 23736 **/
/** chunk id: 535188, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk132392 = require("./132392.js"),
  Chunk342781 = require("./342781.js");
let l = e => {
  var t;
  let {
    onSubmit: n,
    disabled: l
  } = e, {
    task: s
  } = (0, r.T)(), o = i.o[s.ui_component.component.type];
  return null == o ? null : (0, a.jsx)(o, {
    configData: s.ui_component.component.data,
    onSubmit: n,
    taskId: s.task_id,
    flowId: null == (t = s.flow_context) ? true : t.flow_id,
    assignmentId: s.assignment_id,
    disabled: l
  })
}