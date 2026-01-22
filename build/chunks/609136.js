/** Chunk was on web.js **/
/** chunk id: 609136, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
}), require("./733351.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk155718 = require("./155718.js"),
  Chunk224868 = require("./224868.js"),
  Chunk773669 = require("./773669.js"),
  Chunk522602 = require("./522602.js"),
  Chunk360161 = require("./360161.js"),
  Chunk258363 = require("./258363.js"),
  Chunk168186 = require("./168186.js"),
  Chunk985018 = require("./985018.jsx");
let p = {
    [Chunk155718.n4.SUB_COMMAND]: () => ({
      success: false
    }),
    [Chunk155718.n4.SUB_COMMAND_GROUP]: () => ({
      success: false
    }),
    [Chunk155718.n4.BOOLEAN]: e => {
      if ("text" !== e.type) return {
        success: false
      };
      let t = e.text.trim();
      return {
        success: null != (0, c.a5)(t)
      }
    },
    [Chunk155718.n4.STRING]: (e, t, n) => {
      let r;
      switch (i()(t.type === a.n4.STRING, "option type must match validator type"), e.type) {
        case "emoji":
          r = e.surrogate;
          break;
        case "text":
          r = e.text.trim();
          break;
        default:
          return {
            success: false
          }
      }
      if (null != t.choices) return {
        success: null != (0, c.$7)(t.choices, r)
      };
      if (t.autocomplete && null != (0, c.Xf)(n, t.name, r)) return {
        success: true
      };
      let s = r;
      if (true !== t.minLength || true !== t.maxLength) {
        if (null == s) return {
          success: false
        };
        let e = m(s, t, {
          exactRangeErrorMessage: f.t["e+9/SY"],
          rangeErrorMessage: f.t.IE1sTh,
          minErrorMessage: f.t.rXAFQD,
          maxErrorMessage: f.t["ycEPx/"]
        });
        if (!e.success) return e
      }
      return {
        success: true
      }
    },
    [Chunk155718.n4.INTEGER]: (e, t, n) => {
      i()(t.type === a.n4.INTEGER, "option type must match validator type");
      let r = "text" === e.type ? e.text.trim() : null;
      if (null == r || 0 === r.length) return {
        success: false
      };
      if (null != t.choices) return {
        success: null != (0, c.Bk)(t.choices, r)
      };
      if (t.autocomplete && null != (0, c.lM)(n, t.name, r)) return {
        success: true
      };
      let s = Number(u.ib(o.default.locale, r));
      return null == s || isNaN(s) || !Number.isInteger(s) || !Number.isSafeInteger(s) ? {
        success: false
      } : h(s, t, f.t["8Y5zsp"], f.t.CyRLmH, f.t["VD3Q+S"])
    },
    [Chunk155718.n4.NUMBER]: (e, t, n) => {
      i()(t.type === a.n4.NUMBER, "option type must match validator type");
      let r = "text" === e.type ? e.text.trim() : null;
      if (null == r || 0 === r.length) return {
        success: false
      };
      if (null != t.choices) return {
        success: null != (0, c.Bk)(t.choices, r)
      };
      if (t.autocomplete && null != (0, c.lM)(n, t.name, r)) return {
        success: true
      };
      let s = Number(u.ib(o.default.locale, r));
      return isNaN(s) || s > Number.MAX_SAFE_INTEGER || s < Number.MIN_SAFE_INTEGER ? {
        success: false
      } : h(s, t, f.t["8Y5zsp"], f.t.CyRLmH, f.t["VD3Q+S"])
    },
    [Chunk155718.n4.USER]: (e, t, n, r) => {
      if ("text" !== e.type) return {
        success: "userMention" === e.type
      };
      {
        if ((0, d.hT)(e.text)) return {
          success: true
        };
        let t = (0, s.f)(e.text, r, n, {
          allowRoles: false
        });
        return {
          success: (null == t ? true : t.type) === "userMention"
        }
      }
    },
    [Chunk155718.n4.CHANNEL]: (e, t, n, r) => {
      if ("text" !== e.type) return {
        success: "channelMention" === e.type
      };
      {
        if ((0, d.hT)(e.text)) return {
          success: true
        };
        let t = (0, s.f)(e.text, r, n);
        return {
          success: (null == t ? true : t.type) === "channelMention"
        }
      }
    },
    [Chunk155718.n4.ROLE]: (e, t, n, r) => {
      if ("text" !== e.type) return {
        success: _(e)
      };
      {
        if ((0, d.hT)(e.text)) return {
          success: true
        };
        let t = (0, s.f)(e.text, r, n, {
          allowUsers: false
        });
        return {
          success: (null == t ? true : t.type) === "roleMention"
        }
      }
    },
    [Chunk155718.n4.MENTIONABLE]: (e, t, n, r) => {
      if ("text" !== e.type) return {
        success: "userMention" === e.type || _(e)
      };
      {
        if ((0, d.hT)(e.text)) return {
          success: true
        };
        let t = (0, s.f)(e.text, r, n);
        return {
          success: null != t && ("userMention" === t.type || _(t))
        }
      }
    },
    [Chunk155718.n4.ATTACHMENT]: (e, t, n, r, i) => {
      if ("text" !== e.type) return {
        success: false
      };
      let a = l.A.getUpload(n, t.name, (0, d.Qr)(i));
      return {
        success: null != a && a.filename === e.text
      }
    }
  },
  _ = e => "roleMention" === e.type || "textMention" === e.type && "@everyone" === e.text;

function h(e, t, n, r, i) {
  if (null != t.minValue && e < t.minValue || null != t.maxValue && e > t.maxValue) {
    if (null != t.maxValue && null != t.minValue) return {
      success: false,
      error: f.intl.formatToPlainString(n, {
        minimum: g(t.minValue),
        maximum: g(t.maxValue)
      })
    };
    else if (null != t.minValue) return {
      success: false,
      error: f.intl.formatToPlainString(r, {
        minimum: g(t.minValue)
      })
    };
    else if (null != t.maxValue) return {
      success: false,
      error: f.intl.formatToPlainString(i, {
        maximum: g(t.maxValue)
      })
    }
  }
  return {
    success: true
  }
}

function m(e, t, n) {
  if (true !== t.minLength && e.length < t.minLength || true !== t.maxLength && e.length > t.maxLength) {
    if (true !== t.maxLength && true !== t.minLength && t.minLength === t.maxLength) return {
      success: false,
      error: f.intl.formatToPlainString(n.exactRangeErrorMessage, {
        value: g(t.minLength)
      })
    };
    else if (true !== t.maxLength && true !== t.minLength) return {
      success: false,
      error: f.intl.formatToPlainString(n.rangeErrorMessage, {
        minimum: g(t.minLength),
        maximum: g(t.maxLength)
      })
    };
    else if (true !== t.minLength) return {
      success: false,
      error: f.intl.formatToPlainString(n.minErrorMessage, {
        minimum: g(t.minLength)
      })
    };
    else if (true !== t.maxLength) return {
      success: false,
      error: f.intl.formatToPlainString(n.maxErrorMessage, {
        maximum: g(t.maxLength)
      })
    }
  }
  return {
    success: true
  }
}

function g(e) {
  return e.toLocaleString(f.intl.currentLocale, {
    useGrouping: false
  })
}
let E = p