/** Chunk was on 92917 **/
/** chunk id: 212614, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk732955 = require("./732955.js"),
  Chunk79545 = require("./79545.js"),
  Chunk884392 = require("./884392.jsx"),
  Chunk985018 = require("./985018.jsx");

function o(e) {
  let {
    taskType: t
  } = e;
  return (0, r.jsx)(i.$nd, {
    variant: "primary",
    fullWidth: true,
    size: "sm",
    text: s.intl.string(s.t.P84bAD)
  })
}

function c(e) {
  let {
    taskType: t
  } = e;
  return (0, r.jsx)(o, {
    taskType: t
  })
}

function u(e) {
  let {
    taskType: t
  } = e;
  return (0, r.jsx)(i.$nd, {
    variant: "primary",
    fullWidth: true,
    size: "sm",
    text: s.intl.string(s.t.P84bAD)
  })
}

function d(e) {
  let {
    taskType: t
  } = e;
  return (0, r.jsx)(i.$nd, {
    variant: "primary",
    fullWidth: true,
    size: "sm",
    text: s.intl.string(s.t.P84bAD)
  })
}
let p = function(e) {
  let {
    quest: t,
    preClickCallback: n,
    analyticsCtxQuestContent: p,
    analyticsCtxSourceQuestContent: m,
    analyticsCtxQuestContentPosition: f,
    size: g = "md"
  } = e, h = (0, l.P)(t);
  if (0 === Object.keys(t.config.taskConfigV2.tasks).length) return (0, r.jsx)(i.$nd, {
    variant: "primary",
    fullWidth: true,
    size: "sm",
    text: s.intl.string(s.t.P84bAD)
  });
  let _ = Object.values(t.config.taskConfigV2.tasks)[0];
  switch (h) {
    case l.U.UNENROLLED:
      return (0, r.jsx)(a.A, {
        quest: t,
        taskType: _.type,
        size: g,
        preClickCallback: n,
        analyticsCtxQuestContent: p,
        analyticsCtxSourceQuestContent: m,
        analyticsCtxQuestContentPosition: f
      });
    case l.U.ENROLLED:
      return (0, r.jsx)(o, {
        taskType: _.type
      });
    case l.U.INCOMPLETE:
      return (0, r.jsx)(c, {
        taskType: _.type
      });
    case l.U.COMPLETED:
      return (0, r.jsx)(u, {
        taskType: _.type
      });
    case l.U.CLAIMED:
      return (0, r.jsx)(d, {
        taskType: _.type
      });
    default:
      return (0, r.jsx)(i.$nd, {
        variant: "primary",
        fullWidth: true,
        size: g,
        text: s.intl.string(s.t.P84bAD)
      })
  }
}