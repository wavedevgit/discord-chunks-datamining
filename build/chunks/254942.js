/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";

function r(e) {
  let t = {};
  if (t.error_code = e.code, null != e.errors) {
    for (let n of Object.keys(e.errors)) t[n] = [e.getFirstFieldErrorMessage(n)];
    return t
  }
  return t.message = e.message, null != e.retryAfter && (t.retry_after = e.retryAfter), t
}

function i(e) {
  if (Object.keys(e.fields).length > 0) return e.fields;
  let t = {
    message: e.message
  };
  return null != e.retryAfter && (t.retry_after = e.retryAfter), t
}
n.d(t, {
  F: () => r,
  p: () => i
}), n(47120)