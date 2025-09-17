/** Chunk was on 91848 **/
/** chunk id: 436457, original params: e,t,n (module,exports,require) **/
let a, o;
require.d(exports, {
  Z: () => T
}), require("./388685.js"), require("./781311.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk447543 = require("./447543.js"),
  Chunk881052 = require("./881052.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk782605 = require("./782605.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk888113 = require("./888113.js");
let x = (a = window.GLOBAL_ENV.INVITE_HOST, o = "", null == a && (a = location.host, o = Chunk981631.Z5c.INVITE("")), "".concat(location.protocol, "//").concat(a).concat(o, "/"));

function T(e) {
  let {
    onBack: t,
    onComplete: n,
    onConnect: a,
    isSlideReady: o
  } = e, [l, T] = r.useState(""), [A, C] = r.useState(false), [j, O] = r.useState(null), y = r.useRef(null);
  r.useEffect(() => {
    var e;
    o && (null == (e = y.current) || e.focus())
  }, [o]);
  let v = r.useCallback(e => {
    e.preventDefault();
    let t = l.trim();
    if ("" === t) return void O(E.intl.string(E.t.IRq5am));
    O(null), C(true);
    let a = t.split("/"),
      o = a[a.length - 1];
    d.ZP.resolveInvite(o, "Join Guild", {
      inputValue: t
    }).then(e => {
      let {
        invite: t
      } = e;
      if (C(false), null == t) return void O(E.intl.string(E.t["GEYI+f"]));
      if (null != t.channel) {
        let e = d.ZP.getInviteContext("Join Guild", t);
        d.ZP.acceptInvite({
          inviteKey: t.code,
          context: e,
          callback: e => {
            n(), d.ZP.transitionToInvite(e)
          }
        }).catch(e => {
          e instanceof _.yZ || e instanceof _.Hx ? O((0, h.O)(e.code)) : O(E.intl.string(E.t.dDZRd3))
        })
      }
    }, e => {
      C(false);
      let t = new _.yZ(e);
      O((0, h.O)(t.code))
    })
  }, [l, C, O, n]);
  return {
    content: (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsxs)(u.xBx, {
        className: N.header,
        direction: p.Z.Direction.VERTICAL,
        separator: false,
        children: [(0, s.jsx)(u.X6q, {
          variant: "heading-xl/bold",
          color: "header-primary",
          className: N.title,
          children: E.intl.string(E.t.riOUtL)
        }), (0, s.jsx)(u.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: E.intl.string(E.t["7jub2t"])
        })]
      }), (0, s.jsxs)(u.hzk, {
        children: [(0, s.jsx)("form", {
          onSubmit: v,
          className: N.inputForm,
          children: (0, s.jsx)(u.xJW, {
            title: E.intl.string(E.t.qreV29),
            error: j,
            titleClassName: i()(N.formTitle, {
              [N.error]: null != j
            }),
            children: (0, s.jsx)(u.oil, {
              value: l,
              onChange: T,
              inputRef: y
            })
          })
        }), (0, s.jsx)(u.Text, {
          color: "header-secondary",
          variant: "text-xs/normal",
          children: E.intl.format(E.t.lHTZl5, {
            examples: "".concat(x).concat("wumpus-friends", ", ").concat("hTKzmak")
          })
        }), (0, s.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: N.connectCTA,
          children: E.intl.format(E.t["8F/who"], {
            onClick: () => {
              a(), (0, m.openUserSettings)(f.n.CONNECTIONS_PANEL, {
                section: b.oAB.CONNECTIONS
              })
            }
          })
        })]
      })]
    }),
    footer: (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(u.zxk, {
        variant: "primary",
        text: E.intl.string(E.t.VJlc0d),
        onClick: v,
        disabled: 0 === l.length,
        loading: A
      }), (0, s.jsx)(c.zx, {
        className: N.__invalid_skipButton,
        look: c.zx.Looks.BLANK,
        size: c.zx.Sizes.MIN,
        onClick: t,
        children: E.intl.string(E.t["13/7kZ"])
      })]
    })
  }
}