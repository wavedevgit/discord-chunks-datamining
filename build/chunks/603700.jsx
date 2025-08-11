/** Chunk was on 89744 **/
/** chunk id: 603700, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
let i = {
    refresh_app: require("./286813.jsx").Z
  },
  a = e => {
    var t;
    let {
      task: n,
      onSubmit: a,
      disabled: l
    } = e, c = i[n.ui_component.type];
    return null == c ? null : <c configData={n.ui_component.data} onSubmit={a} taskId={n.task_id} flowId={null == (t = n.flow_context) ? true : t.flow_id} assignmentId={n.assignment_id} disabled={l} />
  }