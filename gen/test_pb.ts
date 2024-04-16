// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file test.proto (package test, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message test.TestRequest
 */
export class TestRequest extends Message<TestRequest> {
  /**
   * @generated from field: string data = 1;
   */
  data = "";

  constructor(data?: PartialMessage<TestRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "test.TestRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "data", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestRequest {
    return new TestRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestRequest {
    return new TestRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestRequest {
    return new TestRequest().fromJsonString(jsonString, options);
  }

  static equals(a: TestRequest | PlainMessage<TestRequest> | undefined, b: TestRequest | PlainMessage<TestRequest> | undefined): boolean {
    return proto3.util.equals(TestRequest, a, b);
  }
}

/**
 * @generated from message test.TestResponse
 */
export class TestResponse extends Message<TestResponse> {
  /**
   * @generated from field: string text = 1;
   */
  text = "";

  constructor(data?: PartialMessage<TestResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "test.TestResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TestResponse {
    return new TestResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TestResponse {
    return new TestResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TestResponse {
    return new TestResponse().fromJsonString(jsonString, options);
  }

  static equals(a: TestResponse | PlainMessage<TestResponse> | undefined, b: TestResponse | PlainMessage<TestResponse> | undefined): boolean {
    return proto3.util.equals(TestResponse, a, b);
  }
}
