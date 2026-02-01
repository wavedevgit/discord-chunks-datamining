/** Chunk was on 21738 **/
/** chunk id: 507133, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk297413 = require("./297413.jsx"),
  Chunk235986 = require("./235986.jsx"),
  Chunk144637 = require("./144637.js");
class u extends Chunk64700.PureComponent {
  handleContextMenu(e, t) {
    (0, a.L3)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("97262"), n.e("32418"), n.e("22252")]).then(n.bind(n, 668569));
      return n => {
        var i, l;
        return (0, r.jsx)(e, (i = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({}, n), l = l = {
          user: t
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
        }), i))
      }
    })
  }
  renderUser(e) {
    return null == e ? null : (0, r.jsxs)(o.A, {
      className: c.kQ,
      align: o.A.Align.CENTER,
      onContextMenu: t => {
        null != e && this.handleContextMenu(t, e)
      },
      children: [(0, r.jsx)(l.euF, {
        src: e.getAvatarURL(true, 24),
        "aria-label": e.username,
        size: l._3J.SIZE_24,
        className: c.my
      }), (0, r.jsx)(s.A, {
        user: e,
        className: c.Tc,
        usernameClass: c.Xh,
        discriminatorClass: c.D2
      })]
    }, e.id)
  }
  render() {
    let {
      party: e,
      header: t
    } = this.props, n = e.map(e => this.renderUser(e));
    return (0, r.jsxs)("div", {
      className: c.Gh,
      children: [(0, r.jsx)("div", {
        className: c.wx,
        children: t
      }), (0, r.jsx)(l.IpV, {
        className: c.Qs,
        fade: true,
        children: n
      })]
    })
  }
}
let d = u