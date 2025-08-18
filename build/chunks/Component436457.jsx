/** Chunk was on 63359 **/
/** chunk id: 436457, original params: e,t,n (module,exports,require) **/
let r, o;
require.d(exports, {
  Z: () => y
}), require("./388685.js"), require("./781311.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk447543 = require("./447543.js"),
  Chunk230711 = require("./230711.js"),
  Chunk881052 = require("./881052.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk782605 = require("./782605.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk888113 = require("./888113.js");
let N = (r = window.GLOBAL_ENV.INVITE_HOST, o = "", null == r && (r = location.host, o = Chunk981631.Z5c.INVITE("")), "".concat(location.protocol, "//").concat(r).concat(o, "/"));

function y(e) {
  let {
    onBack: t,
    onComplete: n,
    onConnect: r,
    isSlideReady: o
  } = e, [s, y] = i.useState(""), [j, E] = i.useState(false), [v, C] = i.useState(null), T = i.useRef(null);
  i.useEffect(() => {
    var e;
    o && (null == (e = T.current) || e.focus())
  }, [o]);
  let O = i.useCallback(e => {
    e.preventDefault();
    let t = s.trim();
    if ("" === t) return void C(h.intl.string(h.t.IRq5am));
    C(null), E(true);
    let r = t.split("/"),
      o = r[r.length - 1];
    d.ZP.resolveInvite(o, "Join Guild", {
      inputValue: t
    }).then(e => {
      let {
        invite: t
      } = e;
      if (E(false), null == t) return void C(h.intl.string(h.t["GEYI+f"]));
      if (null != t.channel) {
        let e = d.ZP.getInviteContext("Join Guild", t);
        d.ZP.acceptInvite({
          inviteKey: t.code,
          context: e,
          callback: e => {
            n(), d.ZP.transitionToInvite(e)
          }
        }).catch(e => {
          e instanceof _.yZ || e instanceof _.Hx ? C((0, m.O)(e.code)) : C(h.intl.string(h.t.dDZRd3))
        })
      }
    }, e => {
      E(false);
      let t = new _.yZ(e);
      C((0, m.O)(t.code))
    })
  }, [s, E, C, n]);
  return {
    content: (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(u.xBx, {
        className: x.header,
        direction: p.Z.Direction.VERTICAL,
        separator: false,
        children: [(0, a.jsx)(u.X6q, {
          variant: "heading-xl/bold",
          color: "header-primary",
          className: x.title,
          children: h.intl.string(h.t.riOUtL)
        }), (0, a.jsx)(u.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: h.intl.string(h.t["7jub2t"])
        })]
      }), (0, a.jsxs)(u.hzk, {
        children: [(0, a.jsx)("form", {
          onSubmit: O,
          className: x.inputForm,
          children: (0, a.jsx)(u.xJW, {
            title: h.intl.string(h.t.qreV29),
            error: v,
            titleClassName: l()(x.formTitle, {
              [x.error]: null != v
            }),
            children: (0, a.jsx)(u.oil, {
              value: s,
              onChange: y,
              inputRef: T
            })
          })
        }), (0, a.jsx)(u.Text, {
          color: "header-secondary",
          variant: "text-xs/normal",
          children: h.intl.format(h.t.lHTZl5, {
            examples: "".concat(N).concat("wumpus-friends", ", ").concat("hTKzmak")
          })
        }), (0, a.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: x.connectCTA,
          children: h.intl.format(h.t["8F/who"], {
            onClick: () => {
              r(), f.Z.open(b.oAB.CONNECTIONS)
            }
          })
        })]
      })]
    }),
    footer: (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(u.zxk, {
        variant: "primary",
        text: h.intl.string(h.t.VJlc0d),
        onClick: O,
        disabled: 0 === s.length,
        loading: j
      }), (0, a.jsx)(c.zx, {
        className: x.__invalid_skipButton,
        look: c.zx.Looks.BLANK,
        size: c.zx.Sizes.MIN,
        onClick: t,
        children: h.intl.string(h.t["13/7kZ"])
      })]
    })
  }
}