import {
  Center,
  Col,
  Container,
  Flex,
  Grid,
  Progress,
  Text,
} from "@mantine/core";
import React, { useState } from "react";
import * as styles from "./index.modules.css";
import {
  IconPlayerPlay,
  IconPlayerTrackNext,
  IconPlayerTrackPrev,
  IconPlayerPause,
  IconPlayerSkipForward,
  IconPlayerSkipBack,
  IconVolume,
  IconAdjustmentsAlt
} from "@tabler/icons";
import { useRecoilState } from "recoil";
import { isPlayingState } from "../../atoms/songAtom";

const Home = () => {
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);

  const [volume, setVolume] = useState(50);

  const handlePlayPause = () => {
    setIsPlaying(true)
  };

  return (
    <Container
      size="xl"
      style={{ height: "100vh", backgroundColor: "#191970" }}
      fluid
    >
      <Center style={{ width: "100%", height: "100%" }}>
        <Flex direction="column" style={{ width: "100%" }}>
          <Progress value={10} color="orange" style={{ width: "100%" }} />

          <Grid style={{ marginTop: 10 }}>
            <Col span={5}>
              <Text weight={700} size="xl" style={{ color: "white" }}>
                MUD
              </Text>
              <Text style={{ color: "white" }} size="xs">by Flumes</Text>
            </Col>
            <Col span={3}>
              <Flex align="center" gap="xl">
                {/* <IconPlayerSkipBack /> */}
                <IconPlayerTrackPrev
                  color="white"
                  stroke={2}
                  size={26}
                  style={{ cursor: "pointer" }}
                />
                {isPlaying ? (
                  <IconPlayerPause
                    color="white"
                    stroke={2}
                    size={36}
                    style={{ cursor: "pointer" }}
                    onClick={handlePlayPause}
                  />
                ) : (
                  <IconPlayerPlay
                    color="white"
                    stroke={2}
                    size={36}
                    style={{ cursor: "pointer" }}
                    onClick={handlePlayPause}
                  />
                )}
                <IconPlayerTrackNext
                  color="white"
                  stroke={2}
                  size={26}
                  style={{ cursor: "pointer" }}
                />
              </Flex>
            </Col>
            <Col span={4}>
              <Flex
                align="flex-end"
                justify="flex-end"
                gap="md"
                style={{ marginRight: 40 }}
              >
                <IconVolume color="white" stroke={2} size={26}  />
                <IconAdjustmentsAlt color="white" stroke={2} size={26} />
              </Flex>
            </Col>
          </Grid>
        </Flex>
      </Center>
    </Container>
  );
};

export default Home;
