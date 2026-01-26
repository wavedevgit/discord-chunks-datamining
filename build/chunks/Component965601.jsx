/** Chunk was on 97887 **/
/** chunk id: 965601, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => h
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
async function p(e) {
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

function h(e) {
  let {
    parentChannel: t,
    parentMessageId: n,
    updateThreadSettings: i,
    threadSettings: u,
    textAreaState: h
  } = e, [f, g] = l.useState(false), [m, b] = l.useState(false), A = (0, o.b)(), y = l.useCallback(async () => {
    if (A) {
      g(true);
      try {
        let r = null;
        if (null != n) {
          var e;
          let l = c.A.getMessage(t.id, n);
          r = null != (e = null == l ? true : l.content) ? e : null
        } else h.textValue.trim().length >= 10 && (r = h.textValue);
        if (null != r) {
          let e = await p(r);
          null != e && "" !== e.trim() && i({
            name: e
          })
        }
      } finally {
        g(false)
      }
    }
  }, [t.id, n, i, A, h.textValue]);
  l.useEffect(() => {
    b(false), g(false), t.id === u.parentChannelId && n !== u.parentMessageId && i({
      name: ""
    })
  }, [n, i, t.id, u.parentChannelId, u.parentMessageId]), l.useEffect(() => {
    null != u.name && "" !== u.name.trim() || m || A && null != n && (b(true), y())
  }, [t.id, n, i, u.name, m, A, y]);
  let _ = l.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
      if (A) return {
        icon: a.Dud,
        onClick: y,
        "aria-label": d.intl.string(d.t.ZF2oBs),
        disabled: e || f || null == n && h.textValue.trim().length < 10,
        tooltip: d.intl.string(d.t.ZF2oBs),
        loading: f
      }
    }, [A, y, f, n, h.textValue]),
    O = l.useCallback(function() {
      let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
      return A ? (0, r.jsx)(s.m, {
        text: d.intl.string(d.t.ZF2oBs),
        children: (0, r.jsx)(a.K0, {
          icon: a.Dud,
          variant: "secondary",
          size: "sm",
          "aria-label": d.intl.string(d.t.ZF2oBs),
          onClick: y,
          disabled: e || f || null == n && h.textValue.trim().length < 10,
          loading: f,
          type: "button"
        })
      }) : null
    }, [A, f, n, h.textValue, y]);
  return {
    isGeneratingAI: f,
    generateAIName: y,
    enableAIFeatures: A,
    renderAiGenerateButton: O,
    getThreadNameInputAccessory: _
  }
}