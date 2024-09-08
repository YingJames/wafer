import React from "react";
import { View, Text, TextInput, Image, ScrollView } from "react-native";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "~/components/ui/card";
import { Heart, Globe, MessageCircle, Bookmark, Home, Users, PlusCircle, MessageSquare, User, Settings } from "lucide-react-native";
import { useState } from "react";

export default function SocialFeed() {
  const [search, setSearch] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: "#F3F4F6" }}>
      <View style={{ padding: 16, backgroundColor: "#FFF", elevation: 2 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextInput
            style={{
              flex: 1,
              padding: 8,
              borderWidth: 1,
              borderColor: "#E5E7EB",
              borderRadius: 8,
              marginRight: 8,
            }}
            placeholder="Search..."
            value={search}
            onChangeText={setSearch}
          />
          <Button variant="ghost" size="icon">
            <Globe size={24} />
          </Button>
        </View>
      </View>

      <ScrollView style={{ flex: 1 }}>
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
            Hello, <Text style={{ color: "#8B4513" }}>Marianna</Text>
          </Text>

          <View style={{ marginBottom: 16 }}>
            <Card>
              <CardHeader>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Avatar alt="Sarah">
                    {/* <AvatarImage source={require("./assets/placeholder-user.jpg")} alt="Sarah" /> */}
                    {/* <AvatarFallback>S</AvatarFallback> */}
                  </Avatar>
                  <View style={{ marginLeft: 12 }}>
                    <Text style={{ fontSize: 18, fontWeight: "600" }}>Sarah</Text>
                    <Text style={{ color: "#6B7280" }}>Vík, Iceland</Text>
                  </View>
                </View>
              </CardHeader>
              <CardContent>
                <Image
                  // source={require("./assets/placeholder.svg")}
                  style={{ width: "100%", height: 192, borderRadius: 8 }}
                />
                <Text style={{ marginTop: 8, fontWeight: "600" }}>Meetup with us!</Text>
              </CardContent>
              <CardFooter style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row", gap: 8 }}>
                  <Button variant="ghost" size="icon">
                    <Heart size={24} />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MessageCircle size={24} />
                  </Button>
                </View>
                <Button variant="ghost" size="icon">
                  <Bookmark size={24} />
                </Button>
              </CardFooter>
            </Card>
          </View>

          {/* Repeat other Card components similarly */}
        </View>
      </ScrollView>

      <View style={{ padding: 8, backgroundColor: "#FFF", borderTopWidth: 1, borderColor: "#E5E7EB" }}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Button variant="ghost" size="icon">
            <Home size={24} />
          </Button>
          <Button variant="ghost" size="icon">
            <Users size={24} />
          </Button>
          <Button variant="ghost" size="icon">
            <PlusCircle size={24} />
          </Button>
          <Button variant="ghost" size="icon">
            <MessageSquare size={24} />
          </Button>
          <Button variant="ghost" size="icon">
            <User size={24} />
          </Button>
        </View>
      </View>
    </View>
  );
}
