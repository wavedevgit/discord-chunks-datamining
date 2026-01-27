/** Chunk was on 64171 **/
/** chunk id: 430370, original params: e,t,r (module,exports,require) **/
function n(e) {
  let t = "==".slice(0, (4 - e.length % 4) % 4),
    r = atob(e.replace(/-/g, "+").replace(/_/g, "/") + t),
    n = new ArrayBuffer(r.length),
    s = new Uint8Array(n);
  for (let e = 0; e < r.length; e++) s[e] = r.charCodeAt(e);
  return n
}

function s(e) {
  let t = new Uint8Array(e),
    r = "";
  for (let e of t) r += String.fromCharCode(e);
  return btoa(r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
}
require.d(exports, {
  Jt: () => y,
  d5: () => b
});
var i = "copy",
  o = "convert";

function a(e, t, r) {
  if (t === i) return r;
  if (t === o) return e(r);
  if (t instanceof Array) return r.map(r => a(e, t[0], r));
  if (t instanceof Object) {
    let n = {};
    for (let [s, i] of Object.entries(t)) {
      if (i.derive) {
        let e = i.derive(r);
        true !== e && (r[s] = e)
      }
      if (!(s in r)) {
        if (i.required) throw Error(`Missing key: ${s}`);
        continue
      }
      if (null == r[s]) {
        n[s] = null;
        continue
      }
      n[s] = a(e, i.schema, r[s])
    }
    return n
  }
}

function l(e, t) {
  return {
    required: true,
    schema: e,
    derive: t
  }
}

function c(e) {
  return {
    required: true,
    schema: e
  }
}

function d(e) {
  return {
    required: false,
    schema: e
  }
}
var u = {
    type: c(i),
    id: c(o),
    transports: d(i)
  },
  h = {
    appid: d(i),
    appidExclude: d(i),
    credProps: d(i)
  },
  p = {
    appid: d(i),
    appidExclude: d(i),
    credProps: d(i)
  };
c({
  rp: c(i),
  user: c({
    id: c(o),
    name: c(i),
    displayName: c(i)
  }),
  challenge: c(o),
  pubKeyCredParams: c(i),
  timeout: d(i),
  excludeCredentials: d([u]),
  authenticatorSelection: d(i),
  attestation: d(i),
  extensions: d(h)
}), d(i), c(i), c(i), c(o), d(i), c({
  clientDataJSON: c(o),
  attestationObject: c(o),
  transports: l(i, e => {
    var t;
    return (null == (t = e.getTransports) ? true : t.call(e)) || []
  })
}), l(p, e => e.getClientExtensionResults());
var f = {
    mediation: d(i),
    publicKey: c({
      challenge: c(o),
      timeout: d(i),
      rpId: d(i),
      allowCredentials: d([u]),
      userVerification: d(i),
      extensions: d(h)
    }),
    signal: d(i)
  },
  g = {
    type: c(i),
    id: c(i),
    rawId: c(o),
    authenticatorAttachment: d(i),
    response: c({
      clientDataJSON: c(o),
      authenticatorData: c(o),
      signature: c(o),
      userHandle: c(o)
    }),
    clientExtensionResults: l(p, e => e.getClientExtensionResults())
  };

function b(e) {
  return a(n, f, e)
}
async function y(e) {
  let t = await navigator.credentials.get(e);
  return t.toJSON = () => a(s, g, t), t
}