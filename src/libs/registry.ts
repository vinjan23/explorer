import { Registry } from "@cosmjs/proto-signing";
import { EthSecp256k1PubKey } from "@evmos/proto/dist/ethermint/crypto/v1/ethsecp256k1/keys"";

export const registry = new Registry();

registry.register(
  "/ethermint.crypto.v1.ethsecp256k1.Pubkey",
  EthSecp256k1PubKey
);
