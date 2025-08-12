/** Chunk was on 21087 **/
/** chunk id: 842332, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => h
}), require("./388685.js"), require("./781311.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk544891 = require("./544891.js"),
  Chunk481060 = require("./481060.js"),
  Chunk466721 = require("./466721.js"),
  Chunk375954 = require("./375954.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
async function d(e) {
  try {
    var t, n;
    let r = await l.tn.post({
      url: c.ANM.AI_TITLE,
      body: {
        content: e
      },
      oldFormErrors: true,
      rejectWithError: false
    });
    return r.ok && null != (n = null == (t = r.body) ? true : t.title) ? n : null
  } catch (e) {
    return null
  }
}

function h(e) {
  let {
    parentChannel: t,
    parentMessageId: n,
    updateThreadSettings: l,
    threadSettings: c,
    textAreaState: h
  } = e, [p, f] = i.useState(false), [g, m] = i.useState(false), {
    enableAIFeatures: b
  } = s.C.useExperiment({
    location: "CreateThreadSidebar"
  }), y = i.useCallback(async () => {
    if (b) {
      f(true);
      try {
        let r = null;
        if (null != n) {
          var e;
          let i = o.Z.getMessage(t.id, n);
          r = null != (e = null == i ? true : i.content) ? e : null
        } else h.textValue.trim().length >= 10 && (r = h.textValue);
        if (null != r) {
          let e = await d(r);
          null != e && "" !== e.trim() && l({
            name: e
          })
        }
      } finally {
        f(false)
      }
    }
  }, [t.id, n, l, b, h.textValue]);
  i.useEffect(() => {
    m(false), f(false), t.id === c.parentChannelId && n !== c.parentMessageId && l({
      name: ""
    })
  }, [n, l, t.id, c.parentChannelId, c.parentMessageId]), i.useEffect(() => {
    (null == c.name || "" === c.name.trim()) && !g && b && null != n && (m(true), y())
  }, [t.id, n, l, c.name, g, b, y]);
  let x = i.useCallback(function() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
    return b ? (0, r.jsx)(a.ua7, {
      text: u.intl.string(u.t.ZF2oBg),
      children: t => {
        var i, l;
        return (0, r.jsx)(a.hU, (i = function(e) {
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
        }({}, t), l = l = {
          icon: a.$2U,
          variant: "secondary",
          size: "sm",
          "aria-label": u.intl.string(u.t.ZF2oBg),
          onClick: y,
          disabled: e || p || null == n && h.textValue.trim().length < 10,
          loading: p,
          type: "button"
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
    }) : null
  }, [b, p, n, h.textValue, y]);
  return {
    isGeneratingAI: p,
    generateAIName: y,
    enableAIFeatures: b,
    renderAiGenerateButton: x
  }
}