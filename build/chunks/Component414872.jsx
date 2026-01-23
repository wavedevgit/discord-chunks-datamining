/** Chunk was on web.js **/
/** chunk id: 414872, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => y,
  ap: () => E,
  kg: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk775602 = require("./775602.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk49999 = require("./49999.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk997994 = require("./997994.js");
let m = .2,
  g = 41;

function E() {
  let e = (0, o.bG)([d.A], () => d.A.useReducedMotion),
    [t, a] = (0, f.kn)([l.M.TRIAL_NUX_EMOJI_PICKER]),
    u = t === l.M.TRIAL_NUX_EMOJI_PICKER;
  return i.useEffect(() => () => {
    u && a(p.i.TAKE_ACTION)
  }, [u, a]), (0, r.jsxs)("div", {
    className: h.gg,
    children: [(0, r.jsx)("div", {
      className: h.d6
    }), (0, r.jsx)("div", {
      className: s()(h.FV, h.ys, {
        [h.VN]: e || !u
      })
    }), (0, r.jsxs)("div", {
      className: h.tP,
      children: [(0, r.jsx)("div", {
        className: h.Mq
      }), !e && u && (0, r.jsx)(c.akl, {
        className: h.UV,
        loop: false,
        importData: () => n.e("31838").then(n.t.bind(n, 650125, 19))
      }), (0, r.jsxs)("div", {
        className: s()(h.bl, {
          [h.VN]: e || !u
        }),
        children: [(0, r.jsx)(c.tvc, {
          size: "xs",
          color: "white"
        }), (0, r.jsx)(c.Text, {
          variant: "text-xs/medium",
          color: "always-white",
          lineClamp: 1,
          children: _.intl.string(_.t["BMw+7I"])
        })]
      }), (0, r.jsx)("div", {
        className: h.Ss
      })]
    }), (0, r.jsx)("div", {
      className: h.EL
    })]
  })
}
let y = function(e) {
  let {
    glowOpacity: t,
    className: n,
    colorOpacity: i = m,
    enableBrandRefresh: a = false
  } = e, o = (0, u.Ay)(), l = (0, c.qB1)(o);
  return (0, r.jsxs)("div", {
    className: s()(h.gg, n),
    children: [(0, r.jsx)("div", {
      className: h.d6
    }), (0, r.jsx)("div", {
      style: {
        opacity: a ? 0 : t
      },
      className: h.FV
    }), (0, r.jsxs)("div", {
      className: h.tP,
      children: [(0, r.jsx)("div", {
        className: s()(h.Mq, {
          [h.N4]: a
        })
      }), (0, r.jsx)("div", {
        className: s()(h._Y, {
          [h.N4]: a
        }),
        children: (0, r.jsx)(c.XAi, {
          size: "xs",
          color: a && l ? "black" : "white"
        })
      }), (0, r.jsx)("div", {
        className: s()(h.Ss, {
          [h.N4]: a
        })
      })]
    }), (0, r.jsx)("div", {
      style: {
        opacity: a ? 1 : i
      },
      className: s()(h.KI, {
        [h.N4]: a
      })
    })]
  })
}