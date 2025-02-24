/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
"use strict";
Object.defineProperty(t, "__esModule", {
  value: !0
}), t.Raised = void 0;
var r = s(n(192379)),
  i = s(n(476400)),
  o = s(n(723184)),
  a = s(n(429867));

function s(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var l = t.Raised = function(e) {
  var t = e.zDepth,
    n = e.radius,
    i = e.background,
    s = e.children,
    l = e.styles,
    c = void 0 === l ? {} : l,
    u = (0, o.default)((0, a.default)({
      default: {
        wrap: {
          position: "relative",
          display: "inline-block"
        },
        content: {
          position: "relative"
        },
        bg: {
          absolute: "0px 0px 0px 0px",
          boxShadow: "0 " + t + "px " + 4 * t + "px rgba(0,0,0,.24)",
          borderRadius: n,
          background: i
        }
      },
      "zDepth-0": {
        bg: {
          boxShadow: "none"
        }
      },
      "zDepth-1": {
        bg: {
          boxShadow: "0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)"
        }
      },
      "zDepth-2": {
        bg: {
          boxShadow: "0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)"
        }
      },
      "zDepth-3": {
        bg: {
          boxShadow: "0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)"
        }
      },
      "zDepth-4": {
        bg: {
          boxShadow: "0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)"
        }
      },
      "zDepth-5": {
        bg: {
          boxShadow: "0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)"
        }
      },
      square: {
        bg: {
          borderRadius: "0"
        }
      },
      circle: {
        bg: {
          borderRadius: "50%"
        }
      }
    }, c), {
      "zDepth-1": 1 === t
    });
  return r.default.createElement("div", {
    style: u.wrap
  }, r.default.createElement("div", {
    style: u.bg
  }), r.default.createElement("div", {
    style: u.content
  }, s))
};
l.propTypes = {
  background: i.default.string,
  zDepth: i.default.oneOf([0, 1, 2, 3, 4, 5]),
  radius: i.default.number,
  styles: i.default.object
}, l.defaultProps = {
  background: "#fff",
  zDepth: 1,
  radius: 2,
  styles: {}
}, t.default = l