// src/screens/HomeScreen.js
import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <ScrollViewContent>
        <Header>
          <Title>Horta Comunitária</Title>
        </Header>
        
        <Section>
          <SectionTitle>Benefícios</SectionTitle>
          <SectionContent>
            A horta comunitária ajuda a fornecer alimentos frescos para a comunidade, promove a sustentabilidade e incentiva a cooperação.
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>Plantas Cultivadas</SectionTitle>
          <SectionContent>
            Alface, Tomate, Cenoura, Couve e mais.
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>Como Participar</SectionTitle>
          <SectionContent>
            Entre em contato conosco para se envolver no cultivo e na manutenção da horta.
          </SectionContent>
        </Section>

        <Button title="Saiba Mais" onPress={() => navigation.navigate('Details')} />
      </ScrollViewContent>
    </Container>
  );
};

export default HomeScreen;

const Container = styled.View`
  flex: 1;
  background-color: #f5f5f5;
`;

const ScrollViewContent = styled.ScrollView`
  padding: 20px;
`;

const Header = styled.View`
  padding-top: 50px;
  padding-bottom: 20px;
  background-color: #228B22;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;

const Section = styled.View`
  margin-vertical: 20px;
`;

const SectionTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const SectionContent = styled.Text`
  font-size: 16px;
  line-height: 24px;
`;