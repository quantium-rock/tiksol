import * as anchor from '@project-serum/anchor'
import { WalletNotConnectedError } from '@solana/wallet-adapter-base'
import { TIKSOL_IDL, TIKSOL_PROGRAM_ID } from './const'

export function getProgramInstance(connection, wallet) {

    if (!wallet.publicKey) throw new WalletNotConnectedError();

    const provider = new anchor.AnchorProvider(
        connection,
        wallet,
        anchor.AnchorProvider.defaultOptions()
    )

    const idl = TIKSOL_IDL

    const programId = TIKSOL_PROGRAM_ID

    const program = new (anchor).Program(idl, programId, provider)

    return program
}