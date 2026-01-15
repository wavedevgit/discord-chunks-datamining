/** Chunk was on web.js **/
/** chunk id: 351133, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./781311.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk911969 = require("./911969.js"),
  Chunk465343 = require("./465343.js"),
  Chunk706454 = require("./706454.js"),
  Chunk117530 = require("./117530.js"),
  Chunk160062 = require("./160062.js"),
  Chunk456007 = require("./456007.js"),
  Chunk581364 = require("./581364.js"),
  Chunk388032 = require("./388032.jsx");
let p = {
    [Chunk911969.jw.SUB_COMMAND]: () => ({
      success: false
    }),
    [Chunk911969.jw.SUB_COMMAND_GROUP]: () => ({
      success: false
    }),
    [Chunk911969.jw.BOOLEAN]: e => {
      if ("text" !== e.type) return {
        success: false
      };
      let t = e.text.trim();
      return {
        success: null != (0, c.Kl)(t)
      }
    },
    [Chunk911969.jw.STRING]: (e, t, n) => {
      let r;
      switch (i()(t.type === a.jw.STRING, "option type must match validator type"), e.type) {
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
        success: null != (0, c.cT)(t.choices, r)
      };
      if (t.autocomplete && null != (0, c.Wv)(n, t.name, r)) return {
        success: true
      };
      let o = r;
      if (true !== t.minLength || true !== t.maxLength) {
        if (null == o) return {
          success: false
        };
        let e = m(o, t, {
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
    [Chunk911969.jw.INTEGER]: (e, t, n) => {
      i()(t.type === a.jw.INTEGER, "option type must match validator type");
      let r = "text" === e.type ? e.text.trim() : null;
      if (null == r || 0 === r.length) return {
        success: false
      };
      if (null != t.choices) return {
        success: null != (0, c.l1)(t.choices, r)
      };
      if (t.autocomplete && null != (0, c.xg)(n, t.name, r)) return {
        success: true
      };
      let o = Number(u.AS(s.default.locale, r));
      return null == o || isNaN(o) || !Number.isInteger(o) || !Number.isSafeInteger(o) ? {
        success: false
      } : h(o, t, f.t["8Y5zsp"], f.t.CyRLmH, f.t["VD3Q+S"])
    },
    [Chunk911969.jw.NUMBER]: (e, t, n) => {
      i()(t.type === a.jw.NUMBER, "option type must match validator type");
      let r = "text" === e.type ? e.text.trim() : null;
      if (null == r || 0 === r.length) return {
        success: false
      };
      if (null != t.choices) return {
        success: null != (0, c.l1)(t.choices, r)
      };
      if (t.autocomplete && null != (0, c.xg)(n, t.name, r)) return {
        success: true
      };
      let o = Number(u.AS(s.default.locale, r));
      return isNaN(o) || o > Number.MAX_SAFE_INTEGER || o < Number.MIN_SAFE_INTEGER ? {
        success: false
      } : h(o, t, f.t["8Y5zsp"], f.t.CyRLmH, f.t["VD3Q+S"])
    },
    [Chunk911969.jw.USER]: (e, t, n, r) => {
      if ("text" !== e.type) return {
        success: "userMention" === e.type
      };
      {
        if ((0, d.BH)(e.text)) return {
          success: true
        };
        let t = (0, o.K)(e.text, r, n, {
          allowRoles: false
        });
        return {
          success: (null == t ? true : t.type) === "userMention"
        }
      }
    },
    [Chunk911969.jw.CHANNEL]: (e, t, n, r) => {
      if ("text" !== e.type) return {
        success: "channelMention" === e.type
      };
      {
        if ((0, d.BH)(e.text)) return {
          success: true
        };
        let t = (0, o.K)(e.text, r, n);
        return {
          success: (null == t ? true : t.type) === "channelMention"
        }
      }
    },
    [Chunk911969.jw.ROLE]: (e, t, n, r) => {
      if ("text" !== e.type) return {
        success: _(e)
      };
      {
        if ((0, d.BH)(e.text)) return {
          success: true
        };
        let t = (0, o.K)(e.text, r, n, {
          allowUsers: false
        });
        return {
          success: (null == t ? true : t.type) === "roleMention"
        }
      }
    },
    [Chunk911969.jw.MENTIONABLE]: (e, t, n, r) => {
      if ("text" !== e.type) return {
        success: "userMention" === e.type || _(e)
      };
      {
        if ((0, d.BH)(e.text)) return {
          success: true
        };
        let t = (0, o.K)(e.text, r, n);
        return {
          success: null != t && ("userMention" === t.type || _(t))
        }
      }
    },
    [Chunk911969.jw.ATTACHMENT]: (e, t, n, r, i) => {
      if ("text" !== e.type) return {
        success: false
      };
      let a = l.Z.getUpload(n, t.name, (0, d.D7)(i));
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