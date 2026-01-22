/** Chunk was on 97492 **/
/** chunk id: 965601, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => p
}), require("./896048.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk562465 = require("./562465.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk147087 = require("./147087.js"),
  Chunk320501 = require("./320501.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
async function f(e) {
  try {
    var t, n;
    let r = await i.Bo.post({
      url: u.Rsh.AI_TITLE,
      body: {
        content: e
      },
      oldFormErrors: true,
      rejectWithError: false
    });
    return r.ok && null != (t = null == (n = r.body) ? true : n.title) ? t : null
  } catch (e) {
    return null
  }
}

function p(e) {
  let {
    parentChannel: t,
    parentMessageId: n,
    updateThreadSettings: i,
    threadSettings: u,
    textAreaState: p
  } = e, [h, b] = l.useState(false), [g, m] = l.useState(false), A = (0, o.b)(), y = l.useCallback(async () => {
    if (A) {
      b(true);
      try {
        let r = null;
        if (null != n) {
          var e;
          let l = c.A.getMessage(t.id, n);
          r = null != (e = null == l ? true : l.content) ? e : null
        } else p.textValue.trim().length >= 10 && (r = p.textValue);
        if (null != r) {
          let e = await f(r);
          null != e && "" !== e.trim() && i({
            name: e
          })
        }
      } finally {
        b(false)
      }
    }
  }, [t.id, n, i, A, p.textValue]);
  l.useEffect(() => {
    m(false), b(false), t.id === u.parentChannelId && n !== u.parentMessageId && i({
      name: ""
    })
  }, [n, i, t.id, u.parentChannelId, u.parentMessageId]), l.useEffect(() => {
    null != u.name && "" !== u.name.trim() || g || A && null != n && (m(true), y())
  }, [t.id, n, i, u.name, g, A, y]);
  let O = l.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
      if (A) return {
        icon: s.Dud,
        onClick: y,
        "aria-label": d.intl.string(d.t.ZF2oBs),
        disabled: e || h || null == n && p.textValue.trim().length < 10,
        tooltip: d.intl.string(d.t.ZF2oBs),
        loading: h
      }
    }, [A, y, h, n, p.textValue]),
    j = l.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
      return A ? (0, r.jsx)(a.m, {
        text: d.intl.string(d.t.ZF2oBs),
        children: (0, r.jsx)(s.K0, {
          icon: s.Dud,
          variant: "secondary",
          size: "sm",
          "aria-label": d.intl.string(d.t.ZF2oBs),
          onClick: y,
          disabled: e || h || null == n && p.textValue.trim().length < 10,
          loading: h,
          type: "button"
        })
      }) : null
    }, [A, h, n, p.textValue, y]);
  return {
    isGeneratingAI: h,
    generateAIName: y,
    enableAIFeatures: A,
    renderAiGenerateButton: j,
    getThreadNameInputAccessory: O
  }
}