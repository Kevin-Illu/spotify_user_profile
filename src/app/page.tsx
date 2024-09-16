"use client";
import { Box, Button } from "@radix-ui/themes";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <Box>
        <Box>{JSON.stringify(session)}</Box>
        <Box>
          <Button onClick={() => signOut()}>Sign Out</Button>
        </Box>
      </Box>
    );
  }
  return (
    <Box>
      <Button onClick={() => signIn()}>Sign In</Button>
    </Box>
  );
}
