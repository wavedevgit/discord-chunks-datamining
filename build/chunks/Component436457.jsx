/** Chunk was on 24028 **/
/** chunk id: 436457, original params: e,t,n (module,exports,require) **/
let a, o;
require.d(exports, {
  Z: () => N
}), require("./388685.js"), require("./781311.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk388657 = require("./388657.js");
let E = (a = window.GLOBAL_ENV.INVITE_HOST, o = "", null == a && (a = location.host, o = Chunk981631.Z5c.INVITE("")), "".concat(location.protocol, "//").concat(a).concat(o, "/"));

function N(e) {
  let {
    onBack: t,
    onComplete: n,
    onConnect: a,
    isSlideReady: o
  } = e, [N, x] = l.useState(""), [A, T] = l.useState(false), [C, j] = l.useState(null), y = l.useRef(null);
  l.useEffect(() => {
    var e;
    o && (null == (e = y.current) || e.focus())
  }, [o]);
  let O = l.useCallback(e => {
    e.preventDefault();
    let t = N.trim();
    if ("" === t) return void j(_.intl.string(_.t.IRq5ah));
    j(null), T(true);
    let a = t.split("/"),
      o = a[a.length - 1];
    c.ZP.resolveInvite(o, "Join Guild", {
      inputValue: t
    }).then(e => {
      let {
        invite: t
      } = e;
      if (T(false), null == t) return void j(_.intl.string(_.t["GEYI+Z"]));
      if (null != t.channel) {
        let e = c.ZP.getInviteContext("Join Guild", t);
        c.ZP.acceptInvite({
          inviteKey: t.code,
          context: e,
          callback: e => {
            n(), c.ZP.transitionToInvite(e)
          }
        }).catch(e => {
          e instanceof d.yZ || e instanceof d.Hx ? j((0, p.O)(e.code)) : j(_.intl.string(_.t.dDZRdy))
        })
      }
    }, e => {
      T(false);
      let t = new d.yZ(e);
      j((0, p.O)(t.code))
    })
  }, [N, T, j, n]);
  return {
    content: (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsxs)(r.xBx, {
        className: h.header,
        direction: u.Z.Direction.VERTICAL,
        separator: false,
        children: [(0, s.jsx)(r.Heading, {
          variant: "heading-xl/bold",
          color: "header-primary",
          className: h.title,
          children: _.intl.string(_.t.riOUtB)
        }), (0, s.jsx)(r.Text, {
          variant: "text-md/normal",
          color: "text-default",
          children: _.intl.string(_.t["7jub2t"])
        })]
      }), (0, s.jsxs)(r.hzk, {
        children: [(0, s.jsx)("form", {
          onSubmit: O,
          className: h.inputForm,
          children: (0, s.jsx)(r.oil, {
            label: _.intl.string(_.t.qreV25),
            error: C,
            value: N,
            onChange: x,
            inputRef: y
          })
        }), (0, s.jsx)(r.Text, {
          color: "text-default",
          variant: "text-xs/normal",
          children: _.intl.format(_.t.lHTZl2, {
            examples: "".concat(E).concat("wumpus-friends", ", ").concat("hTKzmak")
          })
        }), (0, s.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "text-default",
          className: h.connectCTA,
          children: _.intl.format(_.t["8F/who"], {
            onClick: () => {
              a(), (0, b.openUserSettings)(f.n.CONNECTIONS_PANEL, {
                section: m.oAB.CONNECTIONS
              })
            }
          })
        })]
      })]
    }),
    footer: (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(r.Button, {
        variant: "primary",
        text: _.intl.string(_.t.VJlc0S),
        onClick: O,
        disabled: 0 === N.length,
        loading: A
      }), (0, s.jsx)(i.zx, {
        className: h.__invalid_skipButton,
        look: i.zx.Looks.BLANK,
        size: i.zx.Sizes.MIN,
        onClick: t,
        children: _.intl.string(_.t["13/7kX"])
      })]
    })
  }
}