import { Card } from "./Card";
import { Container, GridContainer } from "./styles";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { motion } from "framer-motion";

export const Benefits = () => {
  return (
    <Container>
      <h2>Como podemos contribuir para sua independência financeira</h2>
      <GridContainer>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, type: "spring", delay: 0.2 }}
        >
          <Card
            title="Controle suas despesas"
            description="Mantenha um controle rigoroso sobre todas as despesas de seus cartões de crédito, gerenciando cuidadosamente tanto o titular quanto os cartões adicionais. Mantenha-se atualizado com lembretes de pagamento de faturas e contas para garantir que tudo seja pago dentro do prazo adequado."
          >
            <CreditCardIcon />
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, type: "spring", delay: 0.4 }}
        >
          <Card
            title="Acompanhe suas metas"
            description="Estabeleça objetivos e monitore seu progresso. Administre suas metas financeiras de curto, médio e longo prazo. Aproxime-se cada vez mais da realização de seus sonhos e aspirações."
          >
            <ShowChartIcon />
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, type: "spring", delay: 0.6 }}
        >
          <Card
            title="Controle sua riqueza"
            description="Mantenha o controle do seu crescimento financeiro em direção à independência. Administre seus bens, acompanhe o desempenho de seus investimentos e monitore todos os ativos e passivos."
          >
            <AccountBalanceIcon />
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, type: "spring", delay: 0.8 }}
        >
          <Card
            title="Gerencie seus projetos"
            description="Crie projetos e controle seus gastos com precisão em diferentes situações, desde viagens de férias até reformas em sua casa. Gerencie seus custos e tenha uma visão clara do orçamento gasto em cada projeto."
          >
            <AccountTreeIcon />
          </Card>
        </motion.div>
      </GridContainer>
    </Container>
  );
};
