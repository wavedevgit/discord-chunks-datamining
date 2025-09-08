/** Chunk was on 30355 **/
/** chunk id: 384166, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk261616 = require("./261616.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk585483 = require("./585483.js"),
  Chunk592183 = require("./592183.js"),
  Chunk224724 = require("./224724.js"),
  Chunk872269 = require("./872269.js"),
  Chunk228168 = require("./228168.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk461671 = require("./461671.js");

function x(e) {
  let {
    className: t
  } = e, [n, i] = l.useState(false), x = (0, o.Wu)([m.Z], () => {
    var e;
    return null != (e = m.Z.getSaveablePendingWidgets()) ? e : []
  }), h = (0, o.e7)([m.Z], () => m.Z.hasSaveablePendingChanges()), O = (0, o.e7)([m.Z], () => m.Z.isSubmitting), v = (0, o.e7)([u.Z], () => u.Z.useReducedMotion), P = (0, c.Yzy)(h, {
    from: {
      opacity: 0,
      y: 80 * !v
    },
    enter: {
      opacity: 1,
      y: 0
    },
    leave: {
      opacity: 0,
      y: 80 * !v
    }
  });
  l.useEffect(() => {
    let e = null;

    function t() {
      i(true), e = setTimeout(() => i(false), 500)
    }
    return d.S.subscribe(b.CkL.EMPHASIZE_NOTICE, t), () => {
      d.S.unsubscribe(b.CkL.EMPHASIZE_NOTICE, t), null !== e && clearTimeout(e)
    }
  }, []), l.useEffect(() => {
    h && c.uvj.announce(j.intl.string(j.t["0Y/qkJ"]))
  }, [h]);
  let A = l.useCallback(async () => {
      try {
        await f.Z.savePendingWidgets(x)
      } catch (e) {
        (0, g.L$)(p.qb.WIDGET_SAVE_FAILURE)
      }
    }, [x]),
    S = l.useCallback(() => {
      f.Z.clearPendingWidgets()
    }, []);
  return P((e, l) => l ? (0, r.jsx)(s.animated.div, {
    className: t,
    style: e,
    children: (0, r.jsxs)("section", {
      className: a()(y.content, {
        [y.emphasized]: n
      }),
      "aria-label": j.intl.string(j.t["odDw+/"]),
      children: [(0, r.jsx)(c.Text, {
        variant: "text-md/medium",
        color: "text-primary",
        className: y.message,
        children: j.intl.string(j.t["/lQiX1"])
      }), (0, r.jsxs)("div", {
        className: y.actions,
        children: [(0, r.jsx)(c.zxk, {
          size: "sm",
          variant: "secondary",
          text: j.intl.string(j.t.yBZMsb),
          onClick: S,
          disabled: !h || O
        }), (0, r.jsx)(c.zxk, {
          size: "sm",
          variant: "primary",
          text: j.intl.string(j.t.R3BPHx),
          onClick: A,
          loading: O,
          disabled: !h || O
        })]
      })]
    })
  }) : null)
}