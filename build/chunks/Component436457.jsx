/** Chunk was on 91848 **/
/** chunk id: 436457, original params: e,t,n (module,exports,require) **/
let a, o;
require.d(exports, {
  Z: () => N
}), require("./388685.js"), require("./781311.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
let x = (a = window.GLOBAL_ENV.INVITE_HOST, o = "", null == a && (a = location.host, o = Chunk981631.Z5c.INVITE("")), "".concat(location.protocol, "//").concat(a).concat(o, "/"));

function N(e) {
  let {
    onBack: t,
    onComplete: n,
    onConnect: a,
    isSlideReady: o
  } = e, [l, N] = r.useState(""), [T, A] = r.useState(false), [C, j] = r.useState(null), y = r.useRef(null);
  r.useEffect(() => {
    var e;
    o && (null == (e = y.current) || e.focus())
  }, [o]);
  let O = r.useCallback(e => {
    e.preventDefault();
    let t = l.trim();
    if ("" === t) return void j(b.intl.string(b.t.IRq5am));
    j(null), A(true);
    let a = t.split("/"),
      o = a[a.length - 1];
    d.ZP.resolveInvite(o, "Join Guild", {
      inputValue: t
    }).then(e => {
      let {
        invite: t
      } = e;
      if (A(false), null == t) return void j(b.intl.string(b.t["GEYI+f"]));
      if (null != t.channel) {
        let e = d.ZP.getInviteContext("Join Guild", t);
        d.ZP.acceptInvite({
          inviteKey: t.code,
          context: e,
          callback: e => {
            n(), d.ZP.transitionToInvite(e)
          }
        }).catch(e => {
          e instanceof p.yZ || e instanceof p.Hx ? j((0, m.O)(e.code)) : j(b.intl.string(b.t.dDZRd3))
        })
      }
    }, e => {
      A(false);
      let t = new p.yZ(e);
      j((0, m.O)(t.code))
    })
  }, [l, A, j, n]);
  return {
    content: (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsxs)(u.xBx, {
        className: E.header,
        direction: f.Z.Direction.VERTICAL,
        separator: false,
        children: [(0, s.jsx)(u.X6q, {
          variant: "heading-xl/bold",
          color: "header-primary",
          className: E.title,
          children: b.intl.string(b.t.riOUtL)
        }), (0, s.jsx)(u.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: b.intl.string(b.t["7jub2t"])
        })]
      }), (0, s.jsxs)(u.hzk, {
        children: [(0, s.jsx)("form", {
          onSubmit: O,
          className: E.inputForm,
          children: (0, s.jsx)(u.xJW, {
            title: b.intl.string(b.t.qreV29),
            error: C,
            titleClassName: i()(E.formTitle, {
              [E.error]: null != C
            }),
            children: (0, s.jsx)(u.oil, {
              value: l,
              onChange: N,
              inputRef: y
            })
          })
        }), (0, s.jsx)(u.Text, {
          color: "header-secondary",
          variant: "text-xs/normal",
          children: b.intl.format(b.t.lHTZl5, {
            examples: "".concat(x).concat("wumpus-friends", ", ").concat("hTKzmak")
          })
        }), (0, s.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          className: E.connectCTA,
          children: b.intl.format(b.t["8F/who"], {
            onClick: () => {
              a(), _.Z.open(h.oAB.CONNECTIONS)
            }
          })
        })]
      })]
    }),
    footer: (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(u.zxk, {
        variant: "primary",
        text: b.intl.string(b.t.VJlc0d),
        onClick: O,
        disabled: 0 === l.length,
        loading: T
      }), (0, s.jsx)(c.zx, {
        className: E.__invalid_skipButton,
        look: c.zx.Looks.BLANK,
        size: c.zx.Sizes.MIN,
        onClick: t,
        children: b.intl.string(b.t["13/7kZ"])
      })]
    })
  }
}